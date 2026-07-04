---
year: {{ date | default("1970-01-01") | format("YYYY") }} 
tags:
authors: {{authors}}
Abstract: "{{ abstractNote | default('No abstract available.') | escape }}"
---
### {{ title }}

[URL]({{ url }})

### Notes
{% for annotation in annotations -%}
{%- if annotation.annotatedText -%}
    {% if 'Red' in annotation.colorCategory %}
##### {{ annotation.annotatedText | escape }}
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
{{ annotation.annotatedText | escape }}</span> ([{{ annotation.page }}](zotero://open-pdf/library/items/{{ annotation.attachment.itemKey }}?page={{ annotation.page }}&annotation={{ annotation.id }}))
    {% endif %}
{% endif %}
{% if annotation.imageRelativePath -%} 
![{{ annotation.imageRelativePath | replace("literature-notes/", "") }}]({{ annotation.imageRelativePath | replace("literature-notes/", "") }}) 
{%- endif %}
{% if annotation.comment -%} 
>{{ annotation.comment }} 
{% endif %}
{% endfor %}