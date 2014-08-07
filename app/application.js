import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var App = Ember.Application.extend({
  rootElement:      '#ember-app',
  modulePrefix:     'app',
  Resolver:         Resolver
});

loadInitializers(App, 'app');

Ember.run.backburner.DEBUG = true;
Ember.ENV.RAISE_ON_DEPRECATION = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION = true;
Ember.LOG_MODULE_RESOLVER = true;
Ember.LOG_TRANSITIONS_INTERNAL = true;
Ember.LOG_ACTIVE_GENERATION = true;
Ember.LOG_VIEW_LOOKUPS = true;
Ember.LOG_BINDINGS = true;
