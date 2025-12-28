import Modal from '@/components/modal'
import { IFriend } from './types'
import Toggle from '@/components/toggle'
import Tooltip from '@/components/tooltip'

interface ViewToggleModalProps {
    friend: IFriend
    isOpen: boolean
    onClose: () => void
}

const ViewToggleModal = ({ friend, isOpen, onClose }: ViewToggleModalProps) => {
    const handleToggle = (value: boolean) => {
        console.log(value)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {friend && (
                <div id="view-toggle-modal">
                    <header>
                        <h1>{friend.name}의 맛집 지도</h1>
                        <Tooltip text="친구의 맛집 지도를 키고 끌 수 있어요!" />
                    </header>
                    <div className="content">
                        <div className="profile">
                            <img src={friend.avatarSrc} />
                            <p>{friend.name}</p>
                        </div>
                        <Toggle initial={friend.viewYn} onChange={(value) => handleToggle(value)} />
                    </div>
                </div>
            )}
        </Modal>
    )
}
export default ViewToggleModal
