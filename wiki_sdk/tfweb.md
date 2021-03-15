# TFWeb tool

## whats new

- uses docsify, which means all plugins from docsify are back
- all names of .md & .jpeg/.png files need to be unique
- names will be rewritten to lowercase & snakecase
- links & images only need to refer to the shortname e.g. ```![](sdk__bcdb.png  )``` is good enough

## Markdown / Docsify Tricks

### tabs

https://jhildenbiddle.github.io/docsify-tabs/#/?id=usage

### markdown 

please read

https://jhildenbiddle.github.io/docsify-themeable/#/markdown

### copy code

https://github.com/jperasmus/docsify-copy-code/blob/master/README.md

### resizing

```
![logo](https://docsify.js.org/_media/icon.svg ':size=WIDTHxHEIGHT')
![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')

<!-- Support percentage -->

![logo](https://docsify.js.org/_media/icon.svg ':size=10%')

```

### links

```
[link](/demo ':target=_blank')
> **ERROR: link, cannot find page: /demo ':target=_blank'.
IError(Error{
    msg: 'cannot find the file: /demo ':target=_blank''
    code: 0
}) **<BR>


[link](/demo2 ':target=_self')
> **ERROR: link, cannot find page: /demo2 ':target=_self'.
IError(Error{
    msg: 'cannot find the file: /demo2 ':target=_self''
    code: 0
}) **<BR>


```

### remote include

```
[remoteMarkdownUrl](https://raw.githubusercontent.com/Threefoldfoundation/projects_website/master/README.md)
```

the name in [] need to be like above, and use the raw representation of the content