import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
	return (
		<div style={{ height: '100vh' }}>
			<PrettyChatWindow
				projectId='c1dc3bbf-0f09-4766-b01a-8490165644d0'
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: '100vh' }}
			></PrettyChatWindow>
		</div>
	)
}
export default ChatsPage
