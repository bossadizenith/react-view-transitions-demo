const EXIF_LABELS: Record<string, string> = {
  aperture: "Aperture",
  shutter: "Shutter",
  iso: "ISO",
  focalLength: "Focal Length",
  camera: "Camera",
  lens: "Lens",
  whiteBalance: "White Balance",
  meteringMode: "Metering Mode",
};

const EXIF_DATA: Record<string, string> = {
  aperture: "f/2.8",
  shutter: "1/250s",
  iso: "ISO 400",
  focalLength: "35mm",
  camera: "Sony A7IV",
  lens: "Sony FE 35mm f/1.4 GM",
  whiteBalance: "Auto",
  meteringMode: "Multi-segment",
};

export function PhotoDetailsToggle() {
  return (
    <details className="border-t border-white/10 pt-6 mt-6 group">
      <summary className="flex items-center gap-2 font-mono text-xs text-white/40 hover:text-white transition-colors cursor-pointer list-none">
        <span className="inline-block transition-transform duration-200 group-open:rotate-90">
          ▶
        </span>
        Technical Details
      </summary>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(EXIF_DATA).map(([key, value]) => (
          <div key={key}>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-wider">
              {EXIF_LABELS[key]}
            </p>
            <p className="font-mono text-xs text-white/70 mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </details>
  );
}
