type IconProps = {
    name: string;
}

export default function Icon({ name }: IconProps) {
    return (
        <div className="flex items-center justify-center h-full">
            <img src={`/icons/${name}.svg`} alt={`${name} icon`} />
        </div>
    );
}