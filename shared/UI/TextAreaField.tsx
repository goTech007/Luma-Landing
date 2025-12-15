interface TextAreaFieldProps {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-neutral-300">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        rows={3}
        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-white placeholder:text-neutral-500 resize-none"
      />
    </div>
  )
}

