class Api::V1::BotsController < ApplicationController
	def toggle_sale
		bot = Bot.find(params[:id])

		bot.update(for_sale: !bot.for_sale)

		render json: bot
	end

	def index
		bots = Bot.where(for_sale: true)

		render json: bots
	end

	def purchase
		bot = Bot.find(params[:id])


		owner = bot.owner
		owner.update(balance: owner.balance + bot.price)

		bot.update(for_sale: false, owner_id: curr_user.id)

		curr_user.update(balance: curr_user.balance - bot.price)
		
		render json: bot
	end
end