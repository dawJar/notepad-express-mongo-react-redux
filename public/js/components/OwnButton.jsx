import React, { PropTypes, Component } from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


export const BACK_FROM_EDIT_NOTE = 'BACK_FROM_EDIT_NOTE';
export const BACK_FROM_ADD_NOTE = 'BACK_FROM_ADD_NOTE';
export const SAVE_EDITED_NOTE = 'SAVE_EDITED_NOTE';
export const NOTEPAD_ADD_NOTE = 'NOTEPAD_ADD_NOTE';

class OwnButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let { whichAction, handleOnClick } = this.props;
        handleOnClick(whichAction);
    }

    render() {
        let { 
            showAsIcon,
            className, 
            iconStyle,
            btnText, 
            bsSize
        } = this.props;

        return (
            <ButtonToolbar>
                <Button 
                    className={ className || '' }
                    bsSize={ bsSize || '' }
                    onClick={ this.handleClick }
                >
                    { 
                        (!showAsIcon) ?
                            btnText :
                            <span className={ iconStyle } aria-hidden="true"></span>
                    }
                </Button>
            </ButtonToolbar>
        );
    }
}

OwnButton.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    whichAction: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    iconStyle: PropTypes.string.isRequired,
    showAsIcon: PropTypes.bool.isRequired,
    btnText: PropTypes.string.isRequired,
    bsSize: PropTypes.string.isRequired
};

export default OwnButton;