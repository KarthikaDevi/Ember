import Ember from 'ember';
import layout from '../templates/components/z-button';

export default Ember.Component.extend({
  layout: layout,
  tagName : 'button',
  didInsertElement : function(){
       var base = this;
       Ember.run.scheduleOnce('afterRender',function(){
	  $(base.element).css({'background-color':'purple','color':'white'});
       });
  }
});
