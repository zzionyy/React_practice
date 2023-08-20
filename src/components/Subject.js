import React, {Component} from "react";

class Subject extends Component { // 컴포넌트는 정리라고 생각하기
    render() {
        return ( // 하나의 최상위 태그만 써야함
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;