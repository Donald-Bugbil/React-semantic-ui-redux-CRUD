import React from 'react';
import { Segment, Form, TextArea, Button, Grid } from 'semantic-ui-react';
import { editNote } from '../Store/Actions';
import { connect } from 'react-redux';

class EditNote extends React.Component {

    state = {
        header: this.props.note.header,
        meta: this.props.note.meta,
        description: this.props.note.description
    }

    onchangeHandler = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        const note = {
            header: this.state.header,
            meta: this.state.meta,
            description: this.state.description
        }

        const header = this.props.match.params.meta

        this.props.editNote(header, note)

        this.setState({
            header: '',
            meta: '',
            description: ''
        })
        this.props.history.push('/');

    }

    render() {
        return (
            <Segment placeholder style={{width: '70vh', margin: '10vh auto'}}>
                <Grid columns={1} relaxed='very' stackable>
                    <Grid.Column>
                        <Form size='small' onSubmit={this.onSubmitHandler}>
                            <Form.Field>
                                <label>Header</label>
                                <input placeholder='Header' name='header' onChange={this.onchangeHandler} value={this.state.header} />
                            </Form.Field>
                            <Form.Field>
                                <label>Meta</label>
                                <input placeholder='Meta' name='meta' onChange={this.onchangeHandler} value={this.state.meta} />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <TextArea placeholder='Description' name='description' onChange={this.onchangeHandler} value={this.state.description} />
                            </Form.Field>
                            <Button type='submit'>Add note</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

const mapStateToProps = (state, slug) => {
    return {
        note: state.cardDetails.find(note => { return note.header === slug.match.params.header })
    }
}

const mapDispatchToProps = {

    editNote: editNote
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);