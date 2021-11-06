import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            {/*agar ek component k andr dosra component as a property pass karana ho to aise pass hoga*/}
            <ApprovalCard>
                {/*yahan component as a child prop pass hua aur wahan access karne k props.children se access hoga*/}
                <CommentDetail author="Haji" time="Today at 11:23AM" content="I am a Full Stack Developer" />
                {/* <CommentDetail author="Hidayat" time="Today at 10:48AM" content="Mujhe Sab ata hai! " />
                yahan agar two component bhaijengy to as a array of child component jayega */}
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Fuzail" time="Yesterday at 9:54PM" content="Developer from NED" />
            </ApprovalCard>

            <CommentDetail author="Hidayat" time="Today at 10:48AM" content="Mujhe Sab ata hai! " />

            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure want to do this?</div>
            </ApprovalCard>
        </div>

    );

};

// const nestedComponent = () => {
//     return (
//         <div className="ui conatiner comments">
//             <App />
//             {/* <App /> */}
//         </div>

//     );
// }

ReactDOM.render(<App />,
    document.querySelector('#root'));