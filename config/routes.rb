Rails.application.routes.draw do
  root to: "tops#index"
  resources :tops, only: :index do
    collection do
      get 'myself'
      get 'pla'
      get 'mba'
      get 'sta'
    end
  end
end
