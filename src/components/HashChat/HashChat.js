import React from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SingleView extends React.Component {

    state = {
      dropdownOpen: false
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ContentWrapper>
                
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Hash chat content</h2>
                        <p>
                            
                        </p>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default withNamespaces('translations')(SingleView);