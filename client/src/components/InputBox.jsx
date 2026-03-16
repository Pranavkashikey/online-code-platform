export default function InputBox({ input, setInput }) {

  return (
    <textarea
      className="w-full p-3 bg-gray-900 text-white"
      rows="5"
      placeholder="Custom Input"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );

}