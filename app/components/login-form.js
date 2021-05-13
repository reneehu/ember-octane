import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class LoginFormComponent extends Component {
    /**
    * @type {string}
    */
    @tracked userId = null;
    handleSignIn(value) {
        console.log(value);
    }

    /**
    * Handle change events on the <select>
    * @param {Event & { target: HTMLSelectElement }} evt
    */
    @action
    onSelectChanged(evt) {
        this.userId = evt.target.value;
    }

    /**
   * Handle the form submit event
   * @param {Event & { target: HTMLFormElement }} evt
   */
  @action
  //i.e bottom to top action(myDecorator(target, "methodName")) 
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const { value } = target.querySelector('select');
    if (value) this.handleSignIn(value);
  }
}