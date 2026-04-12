import { Loading } from "../../atoms/Loading";

export function PageLoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loading variant="spinner" loadingSize="lg" color="primary" />
    </div>
  );
}
