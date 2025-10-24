export default function SpecTable({specs}:{specs:Record<string,string>}){
  return (
    <table className="w-full text-sm border rounded-xl overflow-hidden">
      <tbody>
        {Object.entries(specs).map(([k,v]) => (
          <tr key={k} className="border-b last:border-none">
            <th className="text-left p-2 bg-slate-50 w-1/3">{k}</th>
            <td className="p-2">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
