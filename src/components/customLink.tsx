import {createLink, type LinkComponent} from "@tanstack/react-router";

type CustomLinkComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement>&{
    underline?:boolean;
};

export const CustomLinkComponent = (props: CustomLinkComponentProps) => {
    return (<a {...props} className={`text-white p-2 ${props.underline && "bg-[#c30112] rounded-lg "}`}/>);
};

export const TanStackLinkComp = createLink(CustomLinkComponent);

export const CustomLink: LinkComponent<typeof TanStackLinkComp> = (
    props
) => {
    return (
        <TanStackLinkComp 
        preload={"intent"}
        activeProps={{
            style: {color: "white"}, 
             underline:true,
        }}
        {...props}
        />
    );
};