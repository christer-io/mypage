function StandardButton({ buttontext }) {
  return (
    <div>
        <button class="bg-blue-500 bg-darkdarkblue hover:bg-blue text-white border border-darkdarkblue font-bold py-2 px-4 rounded inline-flex items-center">
            {buttontext}
        </button>
    </div>
  )
}

export default StandardButton