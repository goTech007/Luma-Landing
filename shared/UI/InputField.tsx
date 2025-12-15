interface InputFieldProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (name: string, value: string) => void
  error?: string
  placeholder?: string
}

export function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-neutral-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-white placeholder:text-neutral-500"
      />
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  )
}

