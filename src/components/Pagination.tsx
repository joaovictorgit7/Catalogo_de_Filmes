interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Paginação">
      <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        ← Anterior
      </button>
      <span>
        Página {page} de {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Próxima →
      </button>
    </nav>
  );
}

export default Pagination;