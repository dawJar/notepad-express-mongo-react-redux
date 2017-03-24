import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import NotepadTab from './NotepadTab.jsx';


class NotepadTabs extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { 
            userNoteCategories, 
            activeCategoryOfNotes, 
            ...otherProps 
        } = this.props;

        let tabsToRender = userNoteCategories.map((category, i) => 
            <Tab 
                eventKey={ i } 
                title={ category }
            >
                cont
            </Tab>
        );

        return (
            <Tabs
                activeKey={ activeCategoryOfNotes }
                onSelect={this.handleSelect}
                id="controlled-tab-example"
            >
                { tabsToRender }
            </Tabs>
        );
    }
}

// NotepadTabs.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default NotepadTabs;