import AdamsButton from '../components/AdamsButton'
import Toast from '../components/Toast'
import FetchBacon from '../components/FetchBacon'

export default function About() {
  return (
    <>
      <div>
        <div className="country-card" contentEditable="true">
          <h2> User can edit the content in this div🥳</h2>
        </div>
      </div>
      <Toast />
      <AdamsButton startValue={'Sweet'} />
      <FetchBacon />
    </>
  )
}
