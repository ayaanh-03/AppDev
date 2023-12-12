from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from reviews.models import Review

# Create your views here.
class AppDevClubReviewsView(APIView):
    def get(self, request):
        reviews = []
        for review in Review.objects.filter():
            reviews.append({
                'review': review.review_text,
                'name': review.name,
                'phone_number': review.phone_number,
                'email': review.email,
            })
        """ 
        reviews = [
            'app dev is great',
            'you should join',
            'hello world',
            'add more react workshops'
        ] 
        """
        return Response({'reviews': reviews})

class CreateAppDevClubReview(APIView):
    def post(self, request):
        review = request.data['review']
        name = request.data['name']
        phone_number = request.data['phone_number']
        email = request.data['email']
        if review == '':
            return Response({'message': 'failure'})
        else:
            # ORM
            # INSERT INTO reviews VALUES ("review_string")
            new_database_entry = Review(
                name=name,
                review=review,
                phone_number=phone_number,
                email=email
            )
            new_database_entry.save()
            return Response({'message': 'success'})