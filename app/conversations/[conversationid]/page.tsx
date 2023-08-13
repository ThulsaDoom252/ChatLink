import React from 'react';

interface IParams {
    conversationId: string
}

const ConversationId = async ({params}: { params: IParams }) => {
    return (
        <div>
            ID!
        </div>
    );
};

export default ConversationId;