export const Card = ({image, title, description}) => {
    return (
        <div className="w-11/12 mx-auto dark:bg-gray-800 m-16
        border-2 dark:border-0 rounded-2xl dark:text-gray-400
        w-96">
            <div id="image"
            className="">
                <img className="rounded-2xl" src={image} alt="" />
            </div>

            <h1 id="title"
            className="text-2xl font-bold text-center py-4
            dark:text-gray-200">{title}</h1>

            <p id="description"
            className="px-4 pb-4 text-justify">{description}</p>
        </div>
    )
}
