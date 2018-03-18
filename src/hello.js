import * as React from 'react';
import AddQuestionForm from './addquestion';
import { graphql } from 'react-apollo';
import QUESTIONS_QUERY from './gql/questions.graphql';

export class Hello extends React.PureComponent {
    render() {
        if (this.props.data && this.props.data.loading) {
            return <div>Loading</div>;
        }

        if (this.props.data && this.props.data.error) {
            return <div>Error</div>;
        }

        if (this.props.data) {
            return <div>
                <h3>Hello {this.props.name}</h3>
                <ul>
                    {this.props.data.questions.map(q => <li key={q.id}>{q.label}</li>)}
                </ul>
                <hr/>
                <AddQuestionForm/>
            </div>;
        }
        return <div>waiting...</div>;
    }
}

export default graphql(QUESTIONS_QUERY)(Hello);
