var MyAvatarPrototype =
Object.create(HTMLElement.prototype);

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
    window[ action ]();
  }
} );

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
