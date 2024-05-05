export const AlertError = (props: { message: string; status: string }) => {
  return (
    props.status === "error" && (
      <div
        className="relative w-full rounded border border-rose-100 bg-rose-50 px-4 py-2 text-sm text-rose-800"
        role="alert"
      >
        <span className="block sm:inline">{props.message}</span>
      </div>
    )
  );
};

export const AlertSuccess = (props: { message: string; status: string }) => {
  return (
    props.status === "success" && (
      <div
        className="relative w-full rounded border border-lime-100 bg-lime-50 px-4 py-2 text-sm text-lime-800"
        role="alert"
      >
        <span className="block sm:inline">{props.message}</span>
      </div>
    )
  );
};
