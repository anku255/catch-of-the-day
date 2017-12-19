import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
          required
        />
        <button type="Submit">Visit Store → </button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
