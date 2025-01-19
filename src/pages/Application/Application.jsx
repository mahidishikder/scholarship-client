import useApplication from "../../hooks/useApplication"

function Application() {
  const [applications,refetch] = useApplication()
  console.log(applications)
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>University Name</th>
        <th>University Address</th>
        <th>Subject Category</th>
        <th>Applied Degree</th>
        <th>Application Fees</th>
        <th>Service Charge</th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map((items,i) => <tr key={items._id}>
          <th>{i+1}</th>
          <td>{items.universityName}</td>
          <td></td>
          <td>{items.subjectCategory}</td>
          <td>{items.degree}</td>
          <td></td>
          <td></td>
        </tr>)
      }
    </tbody>
  
  </table>
</div>
    </div>
  )
}

export default Application