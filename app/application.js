import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var App = Ember.Application.extend({
  rootElement:      '#ember-app',
  modulePrefix:     'app',
  Resolver:         Resolver
  //,LOG_TRANSITIONS_INTERNAL:  true
  //,LOG_ACTIVE_GENERATION:     true
  //,LOG_VIEW_LOOKUPS:          true
  //,LOG_RESOLVER:              true
});

loadInitializers(App, 'app');

//Ember.run.backburner.DEBUG            = true;
//Ember.ENV.RAISE_ON_DEPRECATION        = true;
//Ember.LOG_STACKTRACE_ON_DEPRECATION   = true;
//Ember.LOG_BINDINGS                    = true;
//Ember.RSVP.on('error', function(error) {
//  Ember.Logger.assert(false, error);
//});
