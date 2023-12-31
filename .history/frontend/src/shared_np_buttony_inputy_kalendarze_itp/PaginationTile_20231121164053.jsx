export default function PaginationTile({title, rounded}) {
    return (
          <a
            href="#"
            className={"inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" + {rounded}}
          >
            {title}
          </a>
    )}