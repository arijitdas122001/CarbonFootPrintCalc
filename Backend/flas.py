# # from flask import Flask,render_template,request
# # import pickle


# # app = Flask(__name__)

# # with open('model.pkl', 'rb') as file:
# #     regr = pickle.load(file)

# # with open('label_encoder.pkl', 'rb') as label_file:
# #     label = pickle.load(label_file)



# # @app.route("/",methods=["GET","POST"])
# # def home():
# #     if request.method=="POST":
# #         myDict=request.form
# #         print(myDict);
# #         cylinders = float(myDict['cylinders'])
# #         # fuelType = label.transform([fuelType])[0]  # Assuming label encoder transforms a list
# #         fuelType = myDict['fuelType']

# #         fuelConsumption = float(myDict['fuelConsumption'])
# #         engine=float(myDict['engine'])
# #         fuelType = label.transform(fuelType)
# #         print(fuelType)

# #         # Print the request data to the console
# #         # print(f"Request Data: {myDict}")

# #         # input_size = [[engine, cylinders, fuelType, fuelConsumption]]
# #         input_size =  ([10, 7, 3, 16.7])
# #         print(f"Input Size: {input_size}")

# #         test_y_ = regr.predict([input_size])
# #         print(f"Predicted EMI: {test_y_}")
# #         return render_template('result.html',EMI=round(test_y_))
# #     return render_template('index.html')


# # if __name__ == "__main__":
# #     app.run(debug=True)
# from flask import Flask, render_template, request
# import pickle
# import numpy as np

# app = Flask(__name__)

# with open('model.pkl', 'rb') as file:
#     regr = pickle.load(file)

# with open('label_encoder.pkl', 'rb') as label_file:
#     label = pickle.load(label_file)

# @app.route("/", methods=["GET", "POST"])
# def home():
#     if request.method == "POST":
#         myDict = request.form
#         cylinders = float(myDict['cylinders'])
#         fuelType = myDict['fuelType']
#         fuelConsumption = float(myDict['fuelConsumption'])
#         engine = float(myDict['engine'])
#         fuelType = label.transform([fuelType])[0]
#         print(fuelType)

#         input_size = [[2, 3, 1, 4]]

#         # Ensure the shape of the predicted values is 1D
#         test_y_ = regr.predict(input_size).flatten()
#         print(f"Predicted EMI: {test_y_}")

#         # return render_template('result.html', EMI=round(test_y_[0]))
#         return 1

#     # return render_template('index.html')

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask,render_template,request,jsonify
import pickle
from flask_cors import CORS



app=Flask(__name__)
CORS(app)
with open('model.pkl', 'rb') as file:
    regr = pickle.load(file)

with open('label_encoder.pkl', 'rb') as label_file:
    label = pickle.load(label_file)


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        myDict = request.form
        cylinders = float(myDict['cylinders'])
        fuelType = myDict['fuelType']

        # Mapping fuel types to labels
        fuel_type_mapping = {
            "regular gasoline": 'X',
            "premium gasoline": 'Z',
            "diesel": 'D',
            "ethanol (E85)": 'E',
            "natural gas": 'N'
        }

        # Use the mapping to convert fuel type
        fuelType = fuel_type_mapping.get(fuelType, 'N')  # Default to 'N' if fuel type not found

        fuelConsumption = float(myDict['fuelConsumption'])
        engine = float(myDict['engine'])
        fuelType = label.transform([fuelType])
        # print(fuelType)

        input_size = [engine, cylinders, 3, fuelConsumption]
        # print(input_size[2])

        # test_y_ = 2
        test_y_ = regr.predict([input_size])
        print(test_y_[0])

        return ([test_y_[0]])



if __name__=='__main__':
    app.run(debug=True)
