export function PrescriptionBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        color: 'var(--warning)',
        backgroundColor: 'color-mix(in srgb, var(--warning) 16%, transparent)',
      }}
    >
      ℞ Prescrição
    </span>
  );
}
