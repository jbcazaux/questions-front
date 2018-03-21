import * as React from 'react';
import ADDQUESTION_MUTATION from './gql/add-question.graphql';
import {graphql} from 'react-apollo';

class AddQuestionFom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {label: ''};
        this.addQuestion = this.addQuestion.bind(this);
    }

    addQuestion(e) {
        e.preventDefault();
        this.props.add(this.state.label)
            .then(() => this.setState({label: ''}));
    }

    render() {
        return <form onSubmit={this.addQuestion}>
            <input type="text"
                value={this.state.label}
                placeholder="Nouvelle question"
                onChange={(e) => this.setState({label: e.target.value})}/>

            <input type="submit" value="Ajouter"/>
        </form>;
    }
}

export default graphql(ADDQUESTION_MUTATION, {
    props: ({mutate}) => ({
        add: (label) => mutate({variables: {label}})
    })
})(AddQuestionFom);
