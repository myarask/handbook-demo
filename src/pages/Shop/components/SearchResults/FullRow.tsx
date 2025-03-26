export const FullRow = ({ children }: { children: React.ReactNode }) => (
  <tr>
    <td colSpan={4}>{children}</td>
  </tr>
);
