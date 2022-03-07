class Api::ShoesController < ApplicationController

before_action :set_shoe, only:[:show, :update, :destroy]


def index
  render json:  Shoe.all
end 

def show 
    render json: @shoe
end


def destroy 
render json: @shoe.destroy
end

def create
@shoe = Shoe.new(shoe_params)
if(@shoe.save)
    render json: @shoe
else
    render json: {errors: @shoe.errors.full_messages}, status: 422
    end
end 

def update
    if(@shoe.update(shoe_params))
        render json: @shoe
    else
        render json: {errors: @shoe.errors.full_messages}, status: 422
        end
    end 

private 

def set_shoe
    @shoe = Shoe.find(params[:id])
end

def shoe_params
params.require(:shoe).permit(:brand, :style, :price)
end    


end
