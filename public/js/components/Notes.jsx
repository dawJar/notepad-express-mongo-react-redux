import React, { PropTypes, Component } from 'react';
import Note from './Note.jsx';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { filteredNotes, ...otherProps } = this.props;
        let notesToRender = filteredNotes.map(note => 
            <Note 
                title={ note.title }
                category={ note.category }
                content={ note.content }
                { ...otherProps }
            />
        );

        return (
            <div>
                { notesToRender }
            </div>
        );
    }
}

// Notes.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Notes;