import {IconType} from "react-icons";

interface AuthButtonProps {
    icon: IconType,
    onClick?: () => void
}

const AuthSocialButton: React.FC<AuthButtonProps> = ({
                                                         icon: Icon,
                                                         onClick
                                                     }) => {
    return (
        <button type="button" onClick={onClick} className="
        inline-flex
        w-full
        justify-center
        rounded-md
        px-4
        py-2
        shadow-sm
        text-gray-500
        ring-1
        ring-inset
        ring-gray-300
        hover:bg-gray-50
        focus:outline-offset-0
        ">
            <Icon/>
        </button>
    );
};

export default AuthSocialButton;