import React from 'react'
import '../componentes/sass/main.css';
import tienda from '../multimedia/tienda.jpg';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';

function SobreNosotros() {
    return(
        <>
        <div className='sobreNosotros-container'>
            <section className='sobreNosotros-imgPortada'>
                <Card style={{ width:'60rem'}} >
                    <Card.Img variant="top" src={tienda} />
                </Card>
            </section>
                <div className='sobreNosotros-tittle'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus!</h3>
                </div>
                <hr></hr>
                <div className='sobreNosotros-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet vitae temporibus libero fugiat ducimus dignissimos aut fuga, ipsum reprehenderit! Soluta quibusdam dolores repellendus sunt necessitatibus vitae laudantium est blanditiis obcaecati maiores tempora at maxime aliquam ratione nostrum consequuntur amet ea non fugit officia facere, aut illo? Nihil odit ipsa eveniet qui facere? A praesentium similique soluta culpa ex voluptate molestiae tempora porro quod repellat, hic quis sequi natus dolores vero suscipit doloribus quae mollitia qui aut! Voluptate, aliquam beatae. Ab repellendus, nihil reiciendis, sunt obcaecati quas quam maxime, quos et deserunt rem aliquid aperiam ratione adipisci at quasi non nulla similique? Distinctio, quae. Facilis, possimus dignissimos! Nisi ipsum distinctio suscipit voluptatem ducimus, sequi blanditiis vitae eaque delectus excepturi earum, quam at neque aliquam! Ratione quasi cupiditate ea. Officiis commodi quod sapiente blanditiis. Expedita non sed modi temporibus quisquam numquam illum quas, vero, architecto impedit cum praesentium ratione iste autem?</p>
                </div>
                <div className='sobreNosotros-tittle'>
                    <h4>Nuestro ideario</h4>
                </div>
                <hr></hr>
                <div className='sobreNosotros-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, impedit saepe sapiente dolor aspernatur repellendus vel ratione illum. Rem est vel ullam deserunt, excepturi quisquam obcaecati iure autem, mollitia reiciendis dicta corrupti magni praesentium ducimus exercitationem quibusdam aut laboriosam impedit amet culpa suscipit? Repellat dignissimos at cumque corrupti numquam ipsum consectetur, rerum obcaecati consequatur exercitationem quis, vero illo accusamus illum fugiat ea, distinctio fuga repellendus ullam. Consectetur accusamus explicabo nemo deleniti? Beatae perferendis porro voluptatum consectetur dolorum ipsam illum cupiditate pariatur, facilis veritatis, rerum in tenetur sit a harum. Dignissimos, explicabo? Recusandae nulla porro illum quis deleniti voluptate aspernatur omnis similique. Aperiam aliquid ab dolores nesciunt laborum. Cupiditate incidunt voluptate nulla delectus unde, modi laborum perspiciatis! Veritatis, id et deserunt iure, vitae quisquam necessitatibus incidunt animi neque itaque recusandae quae temporibus esse cumque velit sunt hic. Iure perferendis repellat, temporibus delectus voluptatum, reprehenderit facilis alias adipisci quaerat totam accusantium quisquam similique voluptate eum dolore? Doloribus, in similique aspernatur aliquam impedit nemo. Temporibus libero pariatur dolor? Sed libero repellendus nam, error facilis reiciendis veniam officia autem laboriosam, sint iusto similique et perspiciatis vero doloribus ex delectus! Consequatur magni quod rem iusto similique recusandae sapiente ad, beatae officia minus enim nobis vitae quos accusamus a odio, nemo sequi! Odit aliquid earum sapiente eos adipisci nihil pariatur repellendus illum? Nihil placeat tempora aut praesentium voluptatum earum, ipsa aliquam sed eos, error distinctio nostrum laboriosam quos expedita quo voluptatibus vel molestias quasi molestiae accusamus consectetur. Perferendis, porro iusto? Magnam amet ad vitae facere quo mollitia sit blanditiis nesciunt dolores laborum adipisci ipsa nihil architecto sapiente, laudantium corporis facilis veniam porro ducimus tempora optio hic cum. Quaerat, quos necessitatibus obcaecati laborum odit unde deserunt eveniet optio recusandae a voluptatibus ratione nam perferendis perspiciatis alias et aperiam vel ducimus porro sint est saepe rem aliquam illo!</p>
                </div>
                <Card style={{ width: '80rem' }} className='sobreNosotros-imgPortada'>
                    <Card.Img variant="top" src={tienda} />
                </Card>
        </div>
        </>
        )
}
export default SobreNosotros