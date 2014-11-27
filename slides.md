class: inverse, center, middle

# Why you should be using
# Web Components.
# And How.

---

class: inverse, center, middle

## Phil [@leggetter](https://twitter.com/leggetter)
## "Developer Evangelist"
## [@BladeRunnerJS](https://twitter.com/bladerunnerjs)
## Love Realtime Tech & Web

---

class: inverse, middle, center, section-start

# What we'll cover

* What are Web Components?
* State of native support
* Componentised Web Apps now
* Why Web Components are the future!
--

* Highly recommend [Eric Bidelman's Google IO 2014 talk](http://polymer-change.appspot.com/)

???

* As advertised...

---

class: inverse, middle, center, section-start

# What are Web Components?

* Custom Elements
* Templates
* Shadow DOM
* HTML Imports

---

## Elements

```xml
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>HTML Elements</title>
		<meta name="description" content="">
		<link rel="stylesheet" href="css/stylez.css">
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
class: center, middle, trans-head

## Elements in apps

???

* If only all apps markup looked like this

---

background-image: url(img/gmail-elements.png)
class: center, middle, trans-head

## Elements. Arrrgghhh!

???

* Building larger apps the semantic nature of the markup goes out the window

---

class: inverse, section-start, middle, center

# The Solution: Custom Elements
--

### (They offers more too)

???

* Not the only reason for custom elements
* But a nice way of providing an introduction - via a use case

---

class: code-join

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

class: code-join

## Custom Elements

```xml
<my-avatar service="twitter" username="leggetter" />
```

--

```xml
<script>
var MyAvatarPrototype =
Object.create(HTMLElement.prototype);
```

--

```js
MyAvatarPrototype.createdCallback = function() {
	var username = this.getAttribute('username'),
	service = this.getAttribute('service'),
	url = 'http://avatars.io/' + service + '/' + username;

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

---

class: code-join

## Custom Elements - Extending

```xml
<img is="my-avatar-ext" service="twitter" username="leggetter" />
```

--

```js
<script>
var MyAvatarPrototype = Object.create(HTMLImageElement.prototype);
```

--

```js
MyAvatarPrototype.createdCallback = function() {
	var username = this.getAttribute('username'),
	service = this.getAttribute('service'),
	url = 'http://avatars.io/' + service + '/' + username;

	this.setAttribute('src', url);
};
```

--

```js
document.registerElement('my-avatar-ext', {
	prototype: MyAvatarPrototype,
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
	var tooManyPhils = 100;
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
class: middle, center, trans-head, inverse

## Why Custom Elements?

???

* declarative and readable
* common way to extend
* reusable
* ... and - what's in the slide

---

class: inverse, section-start, middle, center

# Templates

## Native HTML Templating Support

---



---

## Shadow DOM

---

## HTML Imports

---

class: inverse, section-start

# State of Native Support

---

<table>
	<thead>
		<tr>
			<td></td>
			<td>Chrome</td>
			<td>Firefox</td>
			<td>Safari</td>
			<td>IE</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Custom Elements</td>
			<td>Y</td>
			<td>Y</td>
			<td>?</td>
			<td>N</td>
		</tr>
		<tr>
			<td>Templates</td>
			<td>Y</td>
			<td>Y</td>
			<td>?</td>
			<td>N</td>
		</tr>
		<tr>
			<td>Shadow DOM</td>
			<td>Y</td>
			<td>Y</td>
			<td>?</td>
			<td>N</td>
		</tr>
		<tr>
			<td>HTML Imports</td>
			<td>Y</td>
			<td>Y</td>
			<td>?</td>
			<td>N</td>
		</tr>
	</tbody>
</table>

---

class: inverse, section-start

## Componentised Web Apps now

???

* Should native browser support stop us thinking about building
componentised web apps?

---

class: native-components, middle, center

## Native Components

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

class: native-components, middle, center

## HTML5 Native Components

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
<progress /><br />
Form improvements e.g. `meter`, `datalist`, `keygen`, `output`
]

.left-column-3[
```xml
<video />
```
]

.right-column-3[
<video /><br />
Embedded content e.g. `audio`, `canvas`, `svg`, `math`
]

.footer[
]

???


---

class: inverse, center, middle, section-start

# JavaScript

---

### AngularJS

---

### EmberJS

---

### KnockoutJS

---

### ReactJS

---

### webcomponent.js polyfills

---

class: inverse, section-start

# Why Web Components are the future!

---

### Encourages good software development

* Componentised Development
* Supports Change
* Encapsulation
* Loose Coupling
* High Cohesion
* Reusability

---

### Backing

* Google
* Mozilla Firefox

---

### Problems. Solved in the future.

* HTTP2
* Shared scripts
* Cross-component communication?

---

## Summary
