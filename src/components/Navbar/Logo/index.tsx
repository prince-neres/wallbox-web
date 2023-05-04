export default function Logo() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 88"
      className="h-7"
    >
      <title>WallBox</title>
      <defs>
        <image
          width="339"
          height="86"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img1" x="1" y="1" />
    </svg>
  );
}
