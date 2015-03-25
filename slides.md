name: lblue
layout: true

class: bg-light, center, middle

---

class: title

# Why you should be using Web Components Now. And How.

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Evangelism</span>
* <span class="speaker-pusher-logo"></span>

???


---

# What we'll cover

* What are Web Components?
* State of native support
* Componentised Web Apps now
* Why Web Components are the future!
--

* &hearts; [Eric Bidelman's Google IO 2014 talk](http://polymer-change.appspot.com/) &hearts;

???

* As advertised...

---

class: bg-dark

# What are Web Components?

---

# What are Web Components?

* Custom Elements
* HTML Templates
* Shadow DOM
* HTML Imports


???

* But, before we start let's look at what we've got right now

---

class: bg-dark

# Custom Elements

---

class: native-components, wide, long

## Right Now - Elements

.left-column[
```xml
<button>Click Me</button>
```
]

.right-column[
<button>Click Me</button>
]

.left-column-2[
```xml
<input type="text" />
<input type="number" />
<input type="password" />
```
]

.right-column-2[
<input type="text" /><br />
They all look the same
]

.left-column-3[
```xml
<select>
	<option>Select Me</option>
	<option>Dude</option>
</select>
```
]

.right-column-3[
<select>
<option>Select Me</option>
<option>Dude</option>
</select>
]

.left-column-4[
```xml
<label>Check Me</label>
<input type="checkbox" />
```
]

.right-column-4[
<label>Check Me</label><input type="checkbox" />
]

.footer[
`a`, `b`, `blockquote`, `body`, `br`, `code`, `div`, `em`, `fieldset`, `h1`, `h2`, `hr`, `img`, `li`, `ol`, `p`, `pre`, `span`, `strong`, `style`, `table`, `tr`, `td`, ...
]

???

* We do have native components
* Basic
* Difficult to style

---

class: native-components, wide

## HTML5 Elements

.left-column[
```xml
<header>I'm a header</header>
```
]

.right-column[
Stuff around sections or grouping content e.g. `main`, `nav`, `footer`, `figure`, `article`, `aside` etc.
]

.left-column-2[
```xml
<progress />
```
]

.right-column-2[
<progress></progress><br />
Form improvements e.g. `meter`, `datalist`, `keygen`, `output`
]

.left-column-3[
```xml
<video />
```
]

.right-column-3[
<video preload="metadata" autoplay muted loop style="height: 200px;">
	<source src="assets/dizzy.mp4" type="video/mp4">
	<source src="assets/dizzy.webm" type="video/webm">
	<source src="assets/dizzy.ogv" type="video/ogg">
</video>
<br />
Embedded content e.g. `audio`, `canvas`, `svg`, `math`
]

.footer[
]

???

---

class: wide, long

## Elements - Structure & Meaning

```xml
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>HTML Elements</title>
		<meta name="description" content="" />
		<link rel="stylesheet" href="css/stylez.css" />
	</head>
	<body>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
			</ul>
		</nav>
		<header>
			<p>Hello world! This (part of) is HTML5 Boilerplate.</p>
		</header>
		<main>
			<article>Ohhhh. Interesting</article>
		</main>
		<footer>&copy; me</footer>
		<script src="js/script.js"></script>
	</body>
</html>
```

<small><a href="https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5/HTML5_element_list">MDN HTML5 Elements list</a></small>

???
* Some elements are visual
* Others aren't
* We can derive some meaning from this markup

---

background-image: url(img/gmail.png)
class: center, middle, trans-h

## Elements in "apps"

???

* If only all apps markup looked like this

---

background-image: url(img/gmail-elements.png)
class: trans-h

## Elements. Arrrgghhh!

???

* Building larger apps the semantic nature of the markup goes out the window

---

class: top

# The Solution:
## &lt;Custom Elements /&gt;
--

* More than just markup
* IMHO the most important part of Web Components

???

* Not the only reason for custom elements
* But a nice way of providing an introduction - via a use case

---

class: code-reveal, top, long, wide

## Custom Elements: A new Gmail

```xml
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>A new Gmail?</title>
		<meta name="description" content="">
	</head>
	<body>
```

--

```xml
		<header>
			<img src="img/logo.png" alt="Google Logo" />
			<gmail-search />
			<gmail-account-strip />
		</header>
```

--

```xml
		<gmail-side-bar>
			<nav is="gmail-labels"></nav>
			<gmail-contacts />
		</gmail-sidebar>
```

--

```xml
		<main>
			<nav is="gmail-categories"></nav>
			<gmail-email-list />
		</main>
```

--

```xml
		<gmail-talk />
	</body>
</html>
```

---

class: wide

## Start Simple - An Avatar

.left-code-col[
```xml
<img src="http://avatars.io/twitter/leggetter" />
```
]

.right-example-col[
<img src="http://avatars.io/twitter/leggetter" />
]

.left-code-col[
```xml
<img src="http://avatars.io/facebook/leggetter" />
```
]

.right-example-col[
<img src="http://avatars.io/facebook/leggetter" />
]

.left-code-col[
```xml
<img src="http://avatars.io/instagram/leggetter" />
```
]

.right-example-col[
<img src="http://avatars.io/instagram/leggetter" />
]

.left-code-col[
```xml
<img src="http://avatars.io/gravatar/phil@pusher.com" />
```
]

.right-example-col[
<img src="http://avatars.io/gravatar/phil@leggetter.co.uk" />
]

---

class: code-reveal, top, wide

## Custom Elements

```xml
<my-avatar service="twitter" username="leggetter" />
```

--

```xml
<script>
var MyAvatarPrototype = Object.create(HTMLElement.prototype);
```

--

```js
MyAvatarPrototype.createdCallback = function() {
	var username = this.getAttribute('username');
	var service = this.getAttribute('service');
```

--

```js
	var url = 'http://avatars.io/' + service + '/' + username;
```

--

```js
	var img = document.createElement( 'img' );
	img.setAttribute('src', url);
	this.appendChild(img);
};

```

--

```js
document.registerElement('my-avatar', {
	prototype: MyAvatarPrototype
});
</script>
```

.footer[
Define your own elements.
]

???

* Note: `my-` prefix

---

class: wide

## `<my-avatar />`

.left-code-col[
```xml
<my-avatar service="twitter" username="leggetter" />
```
]

.right-example-col[
<my-avatar service="twitter" username="leggetter" />
]

.left-code-col[
```xml
<my-avatar service="facebook" username="leggetter" />
```
]

.right-example-col[
<my-avatar service="facebook" username="leggetter" />
]

.left-code-col[
```xml
<my-avatar service="instagram" username="leggetter" />
```
]

.right-example-col[
<my-avatar service="instagram" username="leggetter" />
]

.left-code-col[
```xml
<my-avatar service="twitter" username="garyshort" />
```
]

.right-example-col[
<my-avatar service="twitter" username="garyshort" />
]

---

class: code-reveal, wide, top

## Custom Elements - Extending

```xml
<img is="my-avatar-ext" service="twitter" username="leggetter" />
```

--

```js
<script>
var MyAvatarExtPrototype = Object.create(HTMLImageElement.prototype);
```

--

```js
MyAvatarExtPrototype.createdCallback = function() {
	var username = this.getAttribute('username'),
	service = this.getAttribute('service'),
	url = 'http://avatars.io/' + service + '/' + username;

	this.setAttribute('src', url);
};
```

--

```js
document.registerElement('my-avatar-ext', {
	prototype: MyAvatarExtPrototype,
	extends: 'img'
});
</script>
```

.footer[
Extending existing elements
]

---

## Custom Elements - Lifecycle

* `createdCallback`
* `attachedCallback`
* `detachedCallback`
* `attributeChangedCallback(attrName, oldVal, newVal)`

<img is="my-avatar-ext" service="twitter" username="leggetter" />
<img is="my-avatar-changer" service="twitter" username="leggetter" />

???

* Demo changing service on the two elements

---

## Create Elements using JavaScript

<div id="phils"></div>

```xml
<script>
function createPhils() {
	var tooManyPhils = 104;
	var phils = 0;
	do {
		var el = document.createElement( 'my-avatar' );
		el.setAttribute('service', 'twitter');
		el.setAttribute('username', 'leggetter');
		document.getElementById( 'phils' ).appendChild( el );
		++phils;
	} while( phils < tooManyPhils );
}
</script>
```

<button data-action="createPhils">Create Phils</button>

---

background-image: url(img/why-custom-elements.png)
class: bg-contain, trans-h

## Why Custom Elements?

???

* mutation observers - observe changes in the DOM in various ways
* declarative and readable
* common way to extend
* reusable
* ... and - what's in the slide

---

class: bg-dark

# Templates

## Native HTML Templating Support

???

* The HTML markup version of jQuery
* We needed it so it's become a browser standard

---

background-image: url(img/template-chooser.png)

```xml
<script type="text/x-handlebars-template">
	<div class="entry">
		<h1>{{title}}</h1>
		<div>{{body}}</div>
	</div>
</script>
```

???

* Examples of templating solutions.
* Why we need a native solution
	* Hacky
	* The majority push around strings
	* XSS vulnerable
---

class: code-reveal, container, wide, top, long

## HTML Templates <button data-action="createAvatar">Create Avatar</button>

```xml
<template id="my-avatar-template">
	<style>
		.container { background-color: cyan; }
		<!-- omitted for brevity -->
	</style>
	<div class="container">
		<img class="avatar" />
		<span class="username"></span>
		<span class="service"></span>
	</div>
</template>
```

--

```js
var MyAvatarTmplPrototype = Object.create(HTMLElement.prototype);

MyAvatarTmplPrototype.createdCallback = function() {
	// get attributes & build url
```

--

```js
	var content = document.querySelector( '#my-avatar-template' ).content;
	var el = document.importNode( content, true );
```

--

```js
	el.querySelector( '.avatar' ).setAttribute( 'src', url );
	el.querySelector( '.username' ).textContent = username;
	el.querySelector( '.service' ).textContent = service;
	this.appendChild( el );
};
```

--

```js
document.registerElement('my-avatar-tmpl', {
	prototype: MyAvatarTmplPrototype
});
```

---

class: middle, center

## Why native HTML Templates?

* Libraries → Native
* Native benefits
* Document fragment = lightweight
* Inert until cloned/used

???

* use DOM to scaffold DOM → no XSS
* parsed, not rendered
* content is inert until cloned/used
* doc fragment → not part of the page

---

class: bg-dark

# Shadow DOM
## DOM/CSS "scoping" / protection

---

## Shadow DOM - Already using it

<video preload="metadata" autoplay muted loop style="height: 200px;">
	<source src="assets/dizzy.mp4" type="video/mp4">
	<source src="assets/dizzy.webm" type="video/webm">
	<source src="assets/dizzy.ogv" type="video/ogg">
</video>

???

* Chrome Options
* Show User Agent Shadow DOM

---

class: top

## Shadow DOM - Problems it solves

--

class: wide

.left-code-col[
```xml
Styles <span class="container">Bleed!</span>
```

```xml
<template id="my-avatar-tmpl">
	<style>
		.container { background-color: cyan; }
		...
```

```xml
<my-avatar-tmpl service="twitter" username="leggetter" />
```
]

.right-example-col[
Styles <span class="container">Bleed!</span>
<button data-action="createAvatar">Me</button>
]

--

.left-code-col[
```xml
<template id="my-avatar-template">
	<div class="container">
		<img id="avatar" />
		...
</template>
```
]

.right-example-col[
Global DOM <br /> e.g. `id` attributes
]

???

* bleed -> styles from the page bleed in or styles from the element out

---

class: code-reveal, container, wide, top, long

## Shadow DOM - In Action <button data-action="createDevWeek">Create DevWeek</button>

--

```xml
<template id="my-avatar-shadow-tmpl">
	<style>
		.container { background-color: red; color: white; }
		...
	</style>
	<div class="container">
		<img id="avatar" />
		...
	</div>
</template>
```

--

```js
var MyAvatarShadowPrototype = Object.create(HTMLElement.prototype);

MyAvatarShadowPrototype.createdCallback = function() {
	// get attributes & build url

	var content = document.querySelector( '#my-avatar-shadow-tmpl' ).content;
```

--

```js
	this.shadow = this.createShadowRoot();
	this.shadow.appendChild( document.importNode( content, true ) );
```

--

```js
	this.shadow.querySelector( '#avatar' ).setAttribute( 'src', url );
	this.shadow.querySelector( '#username' ).textContent = username;
	this.shadow.querySelector( '#service' ).textContent = service;
};

```

--

```js
document.registerElement('my-avatar-shadow', {
	prototype: MyAvatarShadowPrototype
});
```

---

class: middle, center

## Why Shadow DOM?

* DOM & CSS Scoping
* Protection for all: Page and Element
* Encapsulation

???

---

class: bg-dark

# HTML Imports

## Loading & Dependency Management

---

class: top

## HTML Imports - Example

### Before

```xml
<link rel="stylesheet" href="bootstrap.css" />
<link rel="stylesheet" href="fonts.css" />
<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="bootstrap-tooltip.js"></script>
<script src="bootstrap-dropdown.js"></script>
```

--

### After

```xml
<link rel="import" href="bootstrap.html" />
```

---

class: code-reveal, top, wide, long

## HTML Imports - Composition

`team-pusher.html`

--

```xml
<link rel="import" href="my-avatar-import.html" />
```

--

```xml
<template id="team-pusher-tmpl">
	<style>...</style>

	<my-avatar-import service="twitter" username="maxthelion" />
	<my-avatar-import service="twitter" username="copypastaa" />
	...
	<my-avatar-import service="twitter" username="leggetter" />
</template>
```

--

```xml
<script>
	var TeamPusherPrototype = Object.create(HTMLElement.prototype);

	TeamPusherPrototype.createdCallback = function() {
		// Get template, createShadowRoot etc.
	};

	document.registerElement('dunddd-organisers', {
		prototype: TeamPusherPrototype
	});
</script>
```

---

class: top

## HTML Imports - Composition Demo

```xml
<link rel="import" href="assets/team-pusher.html" />

<team-pusher></team-pusher>
```

--

<link rel="import" href="assets/team-pusher.html" />

<team-pusher></team-pusher>

---

## HTML Imports - Gotchas / Patterns!

#### Get & use `document` from the `currentScript`

```
( function( currentScript ) {

	var ownerDoc = currentScript.ownerDocument;

} )( document._currentScript || document.currentScript );
```

#### `importNode` and *NOT* `cloneNode` for Template

```js
// Note: use ownerDoc
var content = ownerDoc.querySelector( '#my-template' );

var clone = ownerDoc.importNode( content, true );
```

???

* `currentScript` -
Returns the &lt;script&gt; element whose script is currently being processed

---

class: center, middle

# Why Use HTML Imports?

* Bundle JS/HTML/CSS → single URL
* Basic dependency management
	* Sharing & reuse
* Supports composition

---

class: bg-dark

# State of Native Support

---

class: stats

## Browsers

<table>
	<thead>
		<tr>
			<td></td>
			<td>Chrome 41</td>
			<td>Firefox 36</td>
			<td>Safari 8</td>
			<td>IE 10</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Custom Elements</td>
			<td class="yes">Y</td>
			<td class="maybe">N*</td>
			<td class="no">N</td>
			<td class="no">N</td>
		</tr>
		<tr>
			<td>Templates</td>
			<td class="yes">Y</td>
			<td class="yes">Y</td>
			<td class="yes">Y</td>
			<td class="no">N</td>
		</tr>
		<tr>
			<td>Shadow DOM</td>
			<td class="yes">Y</td>
			<td class="maybe">N*</td>
			<td class="no">N</td>
			<td class="no">N</td>
		</tr>
		<tr>
			<td>HTML Imports</td>
			<td class="yes">Y</td>
			<td class="maybe">N*</td>
			<td class="no">N</td>
			<td class="no">N</td>
		</tr>
	</tbody>
</table>

<small>* Can be enabled in config</small>

???

* Opera uses same rendering engine as Chrome so has similar support

---

## Firefox

> Mozilla will not ship an implementation of HTML Imports. We expect that once JavaScript modules ... is shipped, the way we look at this problem will have changed.

[https://hacks.mozilla.org/2014/12/mozilla-and-web-components/](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/)

---

background-image: url(img/ie-status.png)
class: trans-h, center

## Internet Explorer

---

template: lblue
class: bg-video

<video id="video" autoplay="false" loop="false" controls="true">
	<source src="/img/ie-uservoice.mp4" type="video/mp4">
</video>

<a style="position: absolute; left: 5%; top: 5%; color: blue; z-index: 200;" href="https://wpdev.uservoice.com/forums/257854-internet-explorer-platform/filters/top">IE UserVoice</a>

???

* Positions 2, 3, 5 & 6

---

background-image: url(img/safari-logo.png)
class: trans-h, center, middle

# Safari?

???

* Did have Shadow DOM support
* Removed, but Eric Bidleman says it may be coming back

---

background-image: url(img/lost.gif)
class: bg-cover

## All is not Lost

---

class: stats, long

## Browsers - with Polyfills

<table>
<thead>
<tr>
<td></td>
<td>Chrome 42</td>
<td>Firefox 36</td>
<td>Safari 8</td>
<td>IE 10</td>
</tr>
</thead>
<tbody>
<tr>
<td>Custom Elements</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
</tr>
<tr>
<td>Templates</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
</tr>
<tr>
<td>Shadow DOM</td>
<td class="yes">Y</td>
<td class="maybe">Y*</td>
<td class="maybe">Y*</td>
<td class="maybe">Y*</td>
</tr>
<tr>
<td>HTML Imports</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
<td class="yes">Y</td>
</tr>
</tbody>
</table>

http://webcomponents.org/polyfills

<small>* <a href="http://webcomponents.org/polyfills/shadow-dom/#known-limitations">Shadow DOM Polyfill limitations</a></small>

???

Shadow DOM: CSS encapsulation limited etc.

---

class: bg-dark

# Componentised Web Apps now


---

class: top

## Componentised Web Apps now - questions?

*Should native browser support stop us thinking about building
componentised web apps?*

--

**No!**

--

*Should we be build componentised web apps anyway?*

--

**We're already building web apps out of components *right now*!**

---

class: inverse, center, middle, section-start

# JavaScript
# Libraries & Frameworks

???

* Because they all have a concept called "Components"

---

class: code-reveal, top, long

### AngularJS

--

```xml
<script src="js/angular.min.js"></script>
```

--

```xml
<script>
angular.module('demo', [])
	.directive('ngAvatar', function () {
		return {
```

--

```js
			restrict:"AEC",
```

--

```js
			scope: {
				service: '@',
				username: '@'
			},
```

--

```xml
			template: '<img src="http://avatars.io/' +
					  '{{service}}/{{username}}" />'
		};
	});
</script>
```

```xml
<body ng-app="demo">
```

--

```xml
	<ng-avatar service="twitter" username="leggetter" />
```

--

<div ng-app="demo" style="text-align: center; margin-top: 20px;">
	<ng-avatar service="twitter" username="leggetter" />
</div>

???

* A - attribute on element, E - element, C - class name

---

class: code-reveal, top, long

### EmberJS

--

```xml
<script src="js/jquery-1.10.0.min.js"></script>
```

--

```xml
<script src="js/handlebars.js"></script>
```

--

```xml
<script src="js/ember.js"></script>
```

--

```xml
<script>
	var App = Ember.Application.create();

	App.EmAvatarComponent = Ember.Component.extend({
```

--

```js
		url: function () {
			return 'http://avatars.io/' +
					this.get( 'service' ) + '/' +
					this.get( 'username' );
		}.property( 'username' , 'service' )
	});
</script>
```

--

```xml
<script type="text/x-handlebars" id="components/em-avatar">
	<img {{bind-attr src=url}} />
</script>
```

--

```
<script type="text/x-handlebars">
	{{em-avatar service="twitter" username="leggetter"}}
</script>
```

http://jsbin.com/fexawujibe/2/edit?html,output

???

* Sorry - no demo. You get the idea.
* http://jsbin.com/fexawujibe/2/edit?html,output


---

class: code-reveal, top, long, wide

### ReactJS

--

```xml
<script src="js/react.js"></script>
<script src="js/JSXTransformer.js"></script>
```

--

```xml
<script type="text/jsx">
var ReAvatar = React.createClass({
	render: function() {
		return (
			<img src={"http://avatars.io/" +
					this.props.service + "/" +
					this.props.username} />
		);
	}
});
```

--

```js
React.renderComponent(
	<ReAvatar service="twitter" username="leggetter" />,
	document.querySelector('re-avatar')
);
</script>
```

--

```xml
<re-avatar />
```

--

<div style="text-align: center; margin-top: 20px;">
	<re-avatar />
</div>

---

### Many More...

* [KnockoutJS Components](http://knockoutjs.com/documentation/component-overview.html)
* [Backbone components](https://github.com/malroc/backbone-component)
* [Backbone with React components](https://github.com/magalhas/backbone-react-component)
* [CanJS components](http://canjs.com/guides/Components.html)

And...

???

* KO introduced components in 3.2


---

background-image: url(img/layers-of-polymer.png)
class: trans-h, center

???

* Material design
* Paper elements

---

class: code-reveal, top, wide

## Polymer

```xml
<script src="webcomponentsjs/webcomponents.min.js"></script>
<link rel="import" href="polymer/polymer.html">
```

--

```xml
<polymer-element name="po-avatar" attributes="service username">
```

--

```xml
	<template>
		<img src="http://avatars.io/{{service}}/{{username}}" />
	</template>
```

--

```xml
	<script>
		Polymer('po-avatar', {});
	</script>
</polymer-element>
```

--

```xml
<po-avatar service="facebook" username="leggetter" />
```

--

<div style="text-align: center; margin-top: 30px;">
	<po-avatar service="facebook" username="leggetter" />
</div>

---

background-image: url(img/polymer-paper-elements.png)
class: bg-cover

---

background-image: url(img/md-angularjs.png)
class: bg-cover

---

class: top, long, wide

## Who's Building Componentised Web Apps now?

--

Angular, Ember, Backbone, Knockout, React, Web Components with Polyfills, Polymer

## **You** probably are already

```xml
<ng-avatar service="twitter" username="leggetter" />
```

vs.

```xml
<my-avatar service="twitter" username="leggetter" />
```

---

class: trans-all
background-image: url(img/poly-mail.png)

## Examples

* [From Eric's Slides](http://polymer-change.appspot.com/#19)
	* [GitHub](https://github.com/)
	* Chrome OS
* [GMail built in Polymer](https://poly-mail.appspot.com/)
* [Topeka game built in Polymer](https://www.polymer-project.org/apps/topeka/)

???

* GitHub time inspect element

---

class: bg-dark

# Why Web Components are the future!

---

# 1. You're already building componentised web apps

## If you're not, you probably should be

---

# 2. Trends & Demand

---

## Libraries

* Alignment toward Web Components
* Angular - Directives
* Ember - Components
* Knockout - Components
* Polymer - build upon Web Components
* Angular 2...

---

class: bg-cover
background-image: url(img/angular-2-component.png)

---

## Browser Vendor Support

* Google
* Opera - uses Blink
* Mozilla
* Microsoft - ?
  * previously: HTA & ASP.NET Controls
	* In high demand on IE UserVoice
* Apple - ?

???

* Libraries: Angular, Ember, KO all very much align
* Whether we like Google or not, they are pushing the web forward
* Mozilla seem to be on board with web components
* MS actually did this previously with HTA and behaviours

---

template: lblue
class: bg-video, em-text, trans-h

<video id="video" autoplay="false" loop="false" controls="true">
	<source src="/img/ie-uservoice.mp4" type="video/mp4">
</video>

## In Demand

???

* Positions 2, 3, 5 & 6

---

class: middle, center

# 3. Encourages good software development

## [Component-based Development](http://en.wikipedia.org/wiki/Component-based_software_engineering)

---

class: long, wide

## Separation of Concerns

```xml
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>A new Gmail?</title>
		<meta name="description" content="">
	</head>
	<body>

		<header>
			<img src="img/logo.png" alt="Google Logo" />
			<gmail-search />
			<gmail-account-strip />
		</header>

		<gmail-side-bar>
			<nav is="gmail-labels"></nav>
			<gmail-contacts />
		</gmail-sidebar>
		<main>
			<nav is="gmail-categories"></nav>
			<gmail-email-list />
		</main>

		<gmail-talk />
	</body>
</html>
```

???

* HTML / Content, CSS / Presentation / JS Behaviour
* We start to build our apps out of components
* Each component does a specific thing
* Each has its own functional concern

---

## Encapsulation

* Shadow DOM - Style & DOM encapsulation
* Does *NOT* offer JavaScript protection

####  Hacky Custom Element

<link rel="import" href="./assets/hack-test.html" />

<hack-test></hack-test>

???

---

## Loose Coupling

* Custom Events
* Element API (interface)
* Existing messaging frameworks

???

* through component APIs

---

class: wide, long, top, code-reveal

## Custom Events

```xml
<script>
	var CustomEventPrototype = Object.create(HTMLElement.prototype);
	CustomEventPrototype.createdCallback = function() {
	  // Build element ...
	  
	  this.addEventListener('click', function() {
	    var customEvent = new CustomEvent('cheese');
	    this.dispatchEvent(customEvent);
	  }.bind(this));
	};

	// ...
```

--

```xml
	var customEl = document.getElementById('my_custom_ev');
	customEl.addEventListener('cheese', function() {
	  alert('cheese fired!');
	});
</script>

<custom-event-ex id="my_custom_ev"></custom-event-ex>
```

<custom-event-ex id="my_custom_ev"></custom-event-ex>

---

class: wide, long, top, code-reveal

## Element API Attributes & Methods

```xml
<script>
	CustomEventPrototype.startSpin = function() {
	  this.img.classList.toggle('spin');
	};
	
	CustomEventPrototype.stopSpin = function() {
		this.img.classList.toggle('spin');
	};
	
	// ...
	
	var spinEl = document.getElementById('spin_el');
	spinEl.startSpin();
	
	// ...
	
	spinEl.stopSpin();
</script>

<custom-event-ex id="spin_el"></custom-event-ex>
```

<custom-event-ex id="spin_el"></custom-event-ex>

---

## Supports Change

???

* loose coupling E.G. interaction through APIs
* Important on the Web where changes happen so fast

---

class: wide

## Reusability

```xml
<link rel="import" href="https://some-cdn.com/my-avatar.html" />
```

???

---

## High Cohesion

```
myavatar.html
├── js/script.js
├── css/styles.css
└── img/bg.png
```

???

* Functional cohesion - everything that's related together (HTML imports)

---

class: middle, center

## Problems? Solved in the future?

* HTML Imports
  * Vulcanize | HTTP2
* Shared scripts?
	* Cache
* Multiple versions?
* Better Cross-component communication?
* Allow `<link>` for CSS in Shadow DOM?

???

* HTTP2: Loading page elements in parallel over a single TCP connection

---

class: top, fixed-ul, wide, long, bg-dark

## Summary


* Custom Elements - **Awesome**

--

* HTML Templates, Shadow DOM, HTML Imports - **Native FTW**

--

* You *can* & *are* building componentised web apps now

--

* Trends & "best practice" &hearts; Web Components

--

* **Web Components are the future!**

???

* Custom Elements - foundation of Web Components. The building blocks of apps to come.
* Custom Elements - declarative, readable, support extension, native benefits

---

class: title

# Why you should be using Web Components Now. And How.

## Questions?

[leggetter.github.io/web-components-now](leggetter.github.io/web-components-now)

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Evangelism</span>
* <span class="speaker-pusher-logo"></span>
