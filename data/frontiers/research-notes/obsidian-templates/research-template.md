{%- set latestAnnotation = "" -%}
{%- for annotation in annotations -%}
  {%- set annotationDate = annotation.date | format("YYYY-MM-DD") -%}
  {%- if annotationDate > latestAnnotation -%}
    {%- set latestAnnotation = annotationDate -%}
  {%- endif -%}
{%- endfor -%}

---
published: "{{ date | format("YYYY-MM-DD") }}"
added: "{{ dateAdded | format("YYYY-MM-DD") }}"
modified: "{{ latestAnnotation }}"
authors: {{ authors }}
abstract: "{{ abstractNote | default('No abstract available.') | escape }}"
---

# {{ title }}

[URL]({{ url }})

## Tags
{% for tag in tags -%}
#{{ tag.tag | default(tag) | replace(" ", "-") | lower }}
{% endfor %}

## Notes
{% for annotation in annotations -%}
{%- set annotationPage = annotation.page | default("1", true) -%}

{%- if annotation.annotatedText -%}
{% if 'Red' in annotation.colorCategory %}
### {{ annotation.annotatedText | escape }}
{% else %}
<span style="color:
{% if annotation.colorCategory == 'Green' %}#A7F3A7{%
elif annotation.colorCategory == 'Yellow' %}#FFF176{%
elif annotation.colorCategory == 'Blue' %}#64B5F6{%
elif annotation.colorCategory == 'Purple' %}#BA68C8{%
elif annotation.colorCategory == 'Orange' %}#FFB74D{%
elif annotation.colorCategory == 'Magenta' %}#E573E5{%
elif annotation.colorCategory == 'Gray' %}#B0BEC5{%
else %}#FFFFFF{% endif %};">
{{ annotation.annotatedText | escape }}</span>
([{{ annotationPage }}](zotero://open-pdf/library/items/{{ annotation.attachment.itemKey }}?page={{ annotationPage }}&annotation={{ annotation.id }}))
{% endif %}
{% endif %}

{% if annotation.imageRelativePath -%}
![{{ annotation.imageRelativePath | replace("literature-notes/", "") }}]({{ annotation.imageRelativePath | replace("literature-notes/", "") }})
{%- endif %}

{% if annotation.comment -%}
{{ annotation.comment }}
{% endif %}

{% if annotation.tags -%}
{% for tag in annotation.tags -%}
#{{ tag.tag | default(tag) | replace(" ", "-") | lower }}
{% endfor %}
{% endif %}

{% endfor %}
