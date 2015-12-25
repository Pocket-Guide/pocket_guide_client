import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class PlaceIndication extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="place-marker">
        {this.props.text}
      </div>
    );
  }
}

