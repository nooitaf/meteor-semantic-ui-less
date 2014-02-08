#Semantic UI package for meteor using less

##What is this?
This is just a wrapper to use Semantic UI `v0.12.4` with meteor using less.

##What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://www.semantic-ui.com/](http://www.semantic-ui.com/)

[https://github.com/jlukic/Semantic-UI](https://github.com/jlukic/Semantic-UI)

###You'll need
[Meteorite](https://github.com/oortcloud/meteorite) 

##Install
`mrt add semantic-ui-less`

###issues:
Javascript elements like dropdowns are not active by default. 
At the moment you will have to activate them 'manually' in the `template.rendered` function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```
