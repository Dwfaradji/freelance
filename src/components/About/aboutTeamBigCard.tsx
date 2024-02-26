import React from "react"

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src="https://images.unsplash.com/photo-1528241725452-5a0eff84abe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Boucif Faradji</h1>
            <h3 className="text-lg font-bold opacity-50">Fondateur</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
            Je suis un développeur Full Stack freelance passionné par la
            création d'applications web innovantes. Je suis spécialisé dans le
            développement frontend et backend, ainsi que dans la conception de
            bases de données robustes.Je suis également un développeur
            autodidacte qui aime apprendre de nouvelles technologies et
            acquérir de nouvelles compétences pour améliorer mes capacités de
            développement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
