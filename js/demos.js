var MyAvatarPrototype = Object.create(HTMLElement.prototype);

MyAvatarPrototype.updateImage = function() {
  var username = this.getAttribute('username'),
  service = this.getAttribute('service'),
  url = 'http://avatars.io/' + service + '/' + username;

  this.img.setAttribute('src', url);
};

MyAvatarPrototype.createdCallback = function() {
  this.img = document.createElement( 'img' );
  this.updateImage();
  this.appendChild(this.img);
};

MyAvatarPrototype.attributeChangedCallback = function() {
  this.updateImage();
};

document.registerElement('my-avatar', {
  prototype: MyAvatarPrototype
});

/***************************/
// MyAvatarExtPrototype

var MyAvatarExtPrototype = Object.create(HTMLImageElement.prototype);

MyAvatarExtPrototype.createdCallback = function() {
  var username = this.getAttribute('username'),
  service = this.getAttribute('service'),
  url = 'http://avatars.io/' + service + '/' + username;

  this.setAttribute('src', url);
}

document.registerElement('my-avatar-ext', {
  prototype: MyAvatarExtPrototype,
  extends: 'img'
});

/***************************/
// MyAvatarChangerPrototype

var MyAvatarChangerPrototype = Object.create(HTMLImageElement.prototype);

MyAvatarChangerPrototype.updateImage = function() {
  var username = this.getAttribute('username'),
  service = this.getAttribute('service'),
  url = 'http://avatars.io/' + service + '/' + username;

  this.setAttribute('src', url);
}

MyAvatarChangerPrototype.attachedCallback = function() {
  this.updateImage();
};

MyAvatarChangerPrototype.attributeChangedCallback = function() {
  this.updateImage();
};

document.registerElement('my-avatar-changer', {
  prototype: MyAvatarChangerPrototype,
  extends: 'img'
});

/***************************/
// createPhils

document.body.addEventListener( 'click', function( e ) {
  var el = e.srcElement || e.target;
  var action = el.getAttribute( 'data-action' );
  if( action ) {
    window[ action ]( e );
  }
} );

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

/*****************************/

var MyAvatarTmplPrototype = Object.create(HTMLElement.prototype);

MyAvatarTmplPrototype.updateEl = function() {
  var username = this.getAttribute('username'),
  service = this.getAttribute('service'),
  url = 'http://avatars.io/' + service + '/' + username;

  this.querySelector( '.avatar' ).setAttribute( 'src', url );
  this.querySelector( '.username' ).textContent = username;
  this.querySelector( '.service' ).textContent = service;
};

MyAvatarTmplPrototype.createdCallback = function() {
  var content = document.querySelector( '#my-avatar-template' ).content;
  this.el = document.importNode( content, true );
  this.appendChild( this.el );
  this.updateEl();
};

MyAvatarTmplPrototype.attributeChangedCallback = function() {
  this.updateEl();
}

document.registerElement('my-avatar-tmpl', {
  prototype: MyAvatarTmplPrototype
});

/*****************************/

function createAvatar( e ) {
  var el = e.srcElement || e.target;
  var avatar = document.createElement( 'my-avatar-tmpl' );
  avatar.setAttribute( 'service', 'facebook' );
  avatar.setAttribute( 'username', 'leggetter' );
  el.parentNode.replaceChild(avatar, el);
}

/*****************************/

var MyAvatarShadowPrototype = Object.create(HTMLElement.prototype);

MyAvatarShadowPrototype.updateEl = function() {
  var username = this.getAttribute('username'),
  service = this.getAttribute('service'),
  url = 'http://avatars.io/' + service + '/' + username;

  this.shadow.querySelector( '#avatar' ).setAttribute( 'src', url );
  this.shadow.querySelector( '#username' ).textContent = username;
  this.shadow.querySelector( '#service' ).textContent = service;
};

MyAvatarShadowPrototype.createdCallback = function() {
  var content = document.querySelector( '#my-avatar-shadow-tmpl' ).content;

  this.shadow = this.createShadowRoot();
  this.shadow.appendChild( document.importNode( content, true ) );

  this.updateEl();
};

MyAvatarShadowPrototype.attributeChangedCallback = function() {
  this.updateEl();
}

document.registerElement('my-avatar-shadow', {
  prototype: MyAvatarShadowPrototype
});

/*****************************/

function createCraig( e ) {
  var el = e.srcElement || e.target;
  var avatar = document.createElement( 'my-avatar-shadow' );
  avatar.setAttribute( 'service', 'twitter' );
  avatar.setAttribute( 'username', 'CAMMURPHY' );
  el.parentNode.replaceChild(avatar, el);
}
