---
title: Zotero iOS System Design
date: 2025-11-23
tags:
  - Product
  - System-Design
draft: false
summary: System design evaluation of the Zotero iOS client based on long-term usage as a knowledge power user tool. Zotero is an open-source reference manager widely used in academic and research workflows.
---
# Product for Knowledge Power Users

I love Zotero.

I’ve been using it for a while now, and it has quietly become one of the most important tools in how I think and work. I originally started using it during my thesis project in college, but over time I realized it extends beyond academic work to anyone who needs to gather, organize, and revisit information from multiple sources.

What makes Zotero powerful is how naturally it fits into a research workflow. I can:
- grab a web page instantly using the Zotero connector
- pull research papers directly from sources like Google Scholar
- store PDFs, books, and documents from anywhere
- annotate, organize, and tag everything in one place 

It essentially becomes a central repository of knowledge assets, the underlying source material.

What made it even more useful for me was how well it integrates with tools like Obsidian. Zotero acts as the source layer, while Obsidian becomes the thinking layer. One holds the raw material. The other builds connections and ideas. But importantly, Zotero doesn’t need Obsidian. On its own, it can function as a complete knowledge base, storing and structuring everything you consume.

That dual nature of standalone capability and composability with other tools is what makes Zotero a genuinely strong product.

---
# Pain Point

The main friction I’ve faced with Zotero is storage.

The free tier gives you 300 MB, which fills up surprisingly fast once you start storing PDFs, papers, and books. Beyond that, you need to pay for additional storage tiers.

There are valid reasons for this:
- running a cloud service has real costs
- subscriptions support the team maintaining the product
    
But as a user, especially given that Zotero is open source, it introduces friction into what is otherwise a very smooth workflow.

From a user perspective, this kind of tool ideally feels like:

> **invisible infrastructure, always available, never blocking you**

And this is where I found a contrast with some other exceptional OS tools.

Tools like Obsidian allow you to:
- use local storage
- optionally sync via iCloud or other providers
    
Zotero, on the other hand, leans more toward:
- its own cloud as the primary sync layer
    
For Apple users especially, this raises a natural question:

> If iCloud already exists as a storage and sync layer, why not leverage it directly?

---
# System Design and Code

Zotero iOS is the mobile client for the Zotero research ecosystem.

Architecture:

- UIKit app with scene-based lifecycle (AppDelegate, SceneDelegate)  
- Navigation coordinated by AppCoordinator  
- Split-view shell (MainViewController) for libraries, collections, items, and readers  

Core system:

- Controllers.swift is the central dependency graph  
- Handles API, session, storage, sync, background tasks, and lifecycle  
- Session layer wires sync, WebDAV, attachment upload/download, background uploads, websocket updates, PDF worker, and cleanup  

Other signals:

- share extension (ZShare) for external capture/import  
- submodules (reader, pdf-worker, translators, etc.) act as integration layer  
- mixed state management (Combine + RxSwift + SwiftUI bindings)  

File storage:

- sits at the core of the system  
- drives sync, upload, download, and access  

---
# Storage Model Design

Attachment storage assumes a single root directory. All file paths are derived from this base. Sync and file handling logic depend on this assumption.

### Tradeoff

Moving from a single storage system to multiple storage backends introduces flexibility for the user. It also increases complexity in file handling.

### Risks

Changing path resolution affects the entire system. Sync assumptions no longer hold in the same way. More edge cases appear in download, offline behavior, and file access. The user mental model becomes unclear.