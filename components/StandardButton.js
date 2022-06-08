function StandardButton({ buttontext }) {
  return (
    <div>
        <button class="bg-blue-500 bg-white text-darkblue border border-darkblue font-bold py-2 px-4 rounded inline-flex items-center">
            {buttontext}
        </button>
    </div>
  )
}

export default StandardButton