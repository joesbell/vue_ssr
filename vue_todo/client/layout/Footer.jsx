
import "../assets/footer.scss"
export default {
    data() {
        return {
            author: 'joesbell'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}